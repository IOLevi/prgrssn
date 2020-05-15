import styles from './mailinglist.module.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function MailingList() {
    return (
        <>
        <div className={styles.mailingList}>
            mailinglist
        </div>

        <div className={styles.formContainer}>
            <Form inline>
                <Form.Group controlId={"formEmail"}>
                    <Form.Label srOnly size={'sm'}>Email address</Form.Label>
                    <Form.Control className={'mb-2 mr-sm-2'} classtype={"email"} placeholder={"Enter email"} />
                </Form.Group>
                <Form.Group controlId={"formName"}>
                    <Form.Label srOnly>Email address</Form.Label>
                    <Form.Control className={'mb-2 mr-sm-2'} type={"text"} placeholder={"Enter name"} />
                </Form.Group>
                <Form.Group controlId={"formButton"}>
                    <Button className='mb-2' variant="light" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>

        </>
    )
}