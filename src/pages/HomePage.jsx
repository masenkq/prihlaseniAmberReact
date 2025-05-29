import React, { useState } from 'react';
import { Checkbox, Input, Button, Divider } from 'antd';
import '../styles/_homepage.sass';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
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

    return (
        <div className="todo-container">
            <h2>Úkoly</h2>
            <div className="input-row">
                <Input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Zadej úkol..."
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
                        <Checkbox key={index} onChange={(e) => handleCheck(e.target.checked, index)}>
                            {task}
                        </Checkbox>
                    ))
                )}
            </div>

            <Divider>Hotovo</Divider>
            <div className="task-list done">
                {doneTasks.length === 0 ? (
                    <p className="empty">Zatím žádné hotové úkoly</p>
                ) : (
                    doneTasks.map((task, index) => (
                        <Checkbox key={index} checked disabled>
                            {task}
                        </Checkbox>
                    ))
                )}
            </div>
        </div>
    );
}

export default TodoList;
