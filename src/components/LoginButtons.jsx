import ForgotPasswordLink from './ForgotPasswordLink';
import SubmitButton from './SubmitButton';
import CreateAccountButton from './CreateAccountButton';
import ExistingUserInfo from './ExistingUserInfo';
import Divider from "./divider";

function LoginButtons() {
    return (
        <>
            <ForgotPasswordLink />
            <SubmitButton />
            <Divider text="nebo" />
            <CreateAccountButton />
            <ExistingUserInfo />
        </>
    );
}

export default LoginButtons;
