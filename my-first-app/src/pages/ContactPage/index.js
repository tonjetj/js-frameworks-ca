import { Link } from "react-router-dom";
import Form from "../../components/form";
import { Wrapper } from "../../components/form/index.styles";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function Contact() {
  return (
    <Wrapper>
      <div>
        <Link to={"/"}>
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>{" "}
        / <ContactPageIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Contact
      </div>
      <h1>Contact</h1>
      <Form />
    </Wrapper>
  );
}

export default Contact;
