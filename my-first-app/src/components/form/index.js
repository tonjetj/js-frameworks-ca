import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import * as S from "./index.styles";

const schema = yup
  .object({
    firstName: yup
      .string()
      .min(3, "Your first name should be at least 3 characters.")
      .max(30, "Your first name cannot be longer than 30 characters.")
      .required("Please enter your first name"),
    lastName: yup
      .string()
      .min(3, "Your last name should be at least 3 characters.")
      .max(30, "Your last name cannot be longer than 30 characters.")
      .required("Please enter your last name"),
    email: yup
      .string()
      .email("Please type in a valid email address.")
      .required("An email adress is required."),
    subject: yup
      .string()
      .min(3, "Your subject should be at least 3 characters.")
      .required("Please type in a subject."),
    text: yup
      .string()
      .min(3, "Your text should contain at least 3 characters.")
      .required(),
  })
  .required();
function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  fetch("http://www.example.com", {
    method: "POST",
    schema: JSON.stringify(schema),
  });

  return (
    <S.Wrapper>
      <S.ContactForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName")}
          id="outlined-textarea"
          label="First name"
          placeholder="Type your first name"
          style={{ width: "100%" }}
        />
        <S.ErrorMsg>{errors.firstName?.message}</S.ErrorMsg>

        <TextField
          {...register("lastName")}
          id="outlined-textarea"
          label="Last name"
          placeholder="Type your last name"
          style={{ width: "100%" }}
        />
        <S.ErrorMsg>{errors.lastName?.message}</S.ErrorMsg>

        <TextField
          {...register("email")}
          id="outlined-textarea"
          label="Email"
          placeholder="name@example.com"
          style={{ width: "100%" }}
        />
        <S.ErrorMsg>{errors.email?.message}</S.ErrorMsg>

        <TextField
          {...register("subject")}
          id="outlined-textarea"
          label="Subject"
          placeholder="Type in your Subject"
          variant="standard"
          style={{ width: "100%" }}
        />
        <S.ErrorMsg>{errors.subject?.message}</S.ErrorMsg>

        <TextField
          {...register("text")}
          id="outlined-multiline-static"
          label="Text area"
          placeholder="Text area"
          multiline
          rows={4}
          style={{ width: "100%" }}
        />
        <S.ErrorMsg>{errors.text?.message}</S.ErrorMsg>

        <TextField type="submit" />
      </S.ContactForm>
    </S.Wrapper>
  );
}

export default Form;
