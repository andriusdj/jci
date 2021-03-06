/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input
} from "reactstrap";

function ContactUs(firstFocus, setFirstFocus, lastFocus, setLastFocus) {
  return (
    <div className="section section-contact-us text-center">
        <Container>
            <h2 className="title">Та бидэнтэй нэгдэхийг хүсэж байна уу?</h2>
            <p className="description">Таны хувь нэмэр бидэнд маш чухал</p>
            <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                    className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                    }
                >
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    placeholder="Нэр..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                    ></Input>
                </InputGroup>
                <InputGroup
                    className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                    }
                >
                    <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                    ></Input>
                </InputGroup>
                <div className="textarea-container">
                    <Input
                    cols="80"
                    name="name"
                    placeholder="Зурвас..."
                    rows="4"
                    type="textarea"
                    ></Input>
                </div>
                <div className="send-button">
                    <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                    >
                    Зурвас илгээх
                    </Button>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default ContactUs;
