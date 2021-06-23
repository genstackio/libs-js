import {AlertPanel} from "../src/molecules/AlertPanel";

export function MockPanel() {
    return (
        <div className={'mt-4'}>
            <AlertPanel color={'info'} variant={'outlined'} title={'Storybook useful information'}>
                <ul>
                    <li><b>test@email.com / password</b> : successful login</li>
                    <li><b>unknown@email.com / password</b> : unknow user error</li>
                    <li><b>existing@email.com / password</b> : user already exists error</li>
                    <li><b>timeout@email.com / password</b> : timeout error (5s)</li>
                    <li><b>badcredentials@email.com / password</b> : bad credentials error</li>
                    <li><b>blocked@email.com / password</b> : specific user error</li>
                    <li><b>disabled@email.com / password</b> : specific user error</li>
                    <li><b>unexpected@email.com / password</b> : unexpected error</li>
                </ul>
            </AlertPanel>
        </div>
    )
}

export default MockPanel
