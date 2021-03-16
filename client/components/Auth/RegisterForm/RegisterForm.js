import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegisterForm({ showLoginForm }) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="name"
        type="text"
        placeholder="Nombre"
        onChange={formik.handleChange}
      />
      <Form.Input
        name="lastname"
        type="text"
        placeholder="Apellidos"
        onChange={formik.handleChange}
      />
      <Form.Input
        name="username"
        type="text"
        placeholder="Usuario"
        onChange={formik.handleChange}
      />
      <Form.Input
        name="email"
        type="text"
        placeholder="Email"
        onChange={formik.handleChange}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
      />

      {/* Actions */}
      <div className="actions">
        <Button type="button" basic>
          Iniciar Sesion
        </Button>

        <Button type="submit" className="submit">
          Registrar
        </Button>
      </div>
    </Form>
  );
}

function initialValues() {
  return {
    name: "",
    lastname: "",
    username: "",
    username: "",
    email: "",
    password: "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required("El apellido es obligatorio"),
  };
}
