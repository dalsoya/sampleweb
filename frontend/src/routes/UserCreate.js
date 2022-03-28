import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { axiosInstace } from '../util';

const UserCreate = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    // const res = await axiosInstace.post('/create', account);
    const formdata = new FormData();
    for (const key in account) {
      // console.log(account[key])
      formdata.append(key, account[key])
    }
    // const res = await axiosInstace.post('/create', account);
    const res = await axiosInstace.post('/create', formdata);
    console.log(res);


    if (res.data.errorMsg != '') {
      setErrorMsg(res.data.errorMsg);
    } else {
      navigate("/")
    }

  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  return <div>
    <Form onSubmit={onSubmit} noValidate>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={account.username}
          name="username"
          onChange={onChange}
        />
        <Form.Text className="text-muted">username</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={account.password}
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {errorMsg}
    </Form>
  </div>
}

export default UserCreate;