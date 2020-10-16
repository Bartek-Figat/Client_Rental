 
     <Container>
      <Row className="justify-content-center">
        <Col xs={8} md={8} >
          <div className="user__error">
            {userError ? errMsg(userError) : null}
          </div>
          {success ? <Alert variant="success">{success}</Alert> : null}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="username"
                value={username || ''}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="useremail"
                value={useremail || ''}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="userpassword"
                value={userpassword || ''}
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>