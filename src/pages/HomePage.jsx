import React, { useState, useEffect } from 'react';
import { Checkbox, Input, Button, Divider } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import '../styles/_homepage.sass';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // 🔄 Načítání z localStorage při načtení komponenty
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const storedDone = JSON.parse(localStorage.getItem('doneTasks')) || [];
        setTasks(storedTasks);
        setDoneTasks(storedDone);
    }, []);

    // 💾 Ukládání do localStorage při změně tasků
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
    }, [doneTasks]);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask.trim()]);
            setNewTask('');
        }
    };

    const handleCheck = (checked, index) => {
        if (checked) {
            const task = tasks[index];
            setTasks(tasks.filter((_, i) => i !== index));
            setDoneTasks([...doneTasks, task]);
        }
    };

    const handleDelete = (index) => {
        const task = doneTasks[index];
        setDoneTasks(doneTasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h2>📝 Moje Úkoly</h2>

            <div className="input-row">
                <Input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Zadej úkol..."
                    onPressEnter={handleAddTask}
                />
                <Button type="primary" onClick={handleAddTask}>
                    Přidat
                </Button>
            </div>

            <Divider>Aktivní</Divider>
            <div className="task-list">
                {tasks.length === 0 ? (
                    <p className="empty">Žádné aktivní úkoly</p>
                ) : (
                    tasks.map((task, index) => (
                        <div key={index} className="task-row">
                            <Checkbox onChange={(e) => handleCheck(e.target.checked, index)}>
                                {task}
                            </Checkbox>
                        </div>
                    ))
                )}
            </div>

            <Divider>Hotovo</Divider>
            <div className="task-list done">
                {doneTasks.length === 0 ? (
                    <p className="empty">Zatím žádné hotové úkoly</p>
                ) : (
                    doneTasks.map((task, index) => (
                        <div key={index} className="task-row">
                            <Checkbox checked disabled>
                                {task}
                            </Checkbox>
                            <Button
                                type="text"
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => handleDelete(index)}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;
