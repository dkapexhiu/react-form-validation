import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

class App extends Component {
  render() {
    return <Register />;
  }
}

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

const countErrors = errors => {
  let count = 0;
  Object.values(errors).forEach(val => val.length > 0 && (count = count + 1));
  return count;
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: false,
      errorCount: null,
      errors: {
        firstName: "",
        surName: "",
        email: "",
        tel: "",
        education: "",
        education_year: "",
        education_faculty: "",
        department: "",
        winner_scholarship: "",
        uni_erasmus: "",
        year_erasmus: "",
        cv: "",
        passport: "",
        list_marks: "",
        list_marks_official: "",
        student_document: "",
        official_student_document: ""
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3 ? "Emri duhet te jete me teper se 3 karaktere!" : "";
        break;
      case "surName":
        errors.surName =
          value.length < 5
            ? "Mbiemri duhet te jete me teper se 5 karaktere!"
            : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Emaili nuk eshte i rregullt!";
        break;
      case "tel":
        errors.tel =
          value.length < 10
            ? "Numri i telefonit duhet te jete minimumi 10 karaktere!"
            : "";
        break;
      case "education":
        errors.education =
          value.length <= 0
            ? "Fusha Niveli i studimit nuk duhet te jete bosh!"
            : "";
        break;
      case "education_faculty":
        errors.education =
          value.length <= 0
            ? "Fusha Fakulteti ne te cilen studioni nuk duhet te jete bosh!"
            : "";
        break;
      case "education_year":
        errors.education_year =
          value.length < 4
            ? "Viti aktual i studimit nuk mund te jete me pak se 4 karaktere!"
            : "";
        break;
      case "department":
        errors.department =
          value.length < 0 ? "Departamenti duhet plotesuar!" : "";
        break;
      case "uni_erasmus":
        errors.uni_erasmus =
          value.length < 0
            ? "Universiteti i meparshem i Erasmus duhet plotesuar!"
            : "";
        break;
      case "year_erasmus":
        errors.year_erasmus =
          value.length < 4
            ? "Viti kur keni qene ne Erasmus nuk mund te jete me pak se 4 karaktere!"
            : "";
        break;
      case "winner_scholarship":
        errors.winner_scholarship =
          value.length <= 0
            ? "Fusha Fitues i Bursave Erasmus+ duhet te jete e plotesuar!"
            : "";
        break;
      case "cv":
        errors.cv =
          value.length <= 0 ? "Fusha CV duhet te jete e plotesuar!" : "";
        break;
      case "passport":
        errors.passport =
          value.length <= 0
            ? "Fusha Pashaporta duhet te jete e plotesuar!"
            : "";
        break;
      case "list_marks":
        errors.list_marks =
          value.length <= 0
            ? "Fusha Lista e Notave duhet te jete e plotesuar!"
            : "";
        break;
      case "list_marks_official":
        errors.list_marks_official =
          value.length <= 0
            ? "Fusha Lista e Notave Zyrtare duhet te jete e plotesuar!"
            : "";
        break;
      case "student_document":
        errors.student_document =
          value.length <= 0
            ? "Fusha Dokumenti i Studentit duhet te jete e plotesuar!"
            : "";
        break;
      case "official_student_document":
        errors.official_student_document =
          value.length <= 0
            ? "Fusha Dokumenti Zyrtar i Studentit duhet te jete i plotesuar!"
            : "";
        break;
      case "foreign_language_certificate":
        errors.foreign_language_certificate =
          value.length <= 0
            ? "Fusha Certifikate e Gjuhes se Huaj duhet te jete e plotesuar!"
            : "";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
  };

  render() {
    const { errors, formValid } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Aplikime Erasmus+ K1</h2>
          <form
            onSubmit={this.handleSubmit}
            noValidate
            method="POST"
            data-netlify="true"
          >
            <div className="firstName">
              <label htmlFor="firstName">Emri</label>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.firstName.length > 0 && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="surName">
              <label htmlFor="surName">Mbiemri</label>
              <input
                type="text"
                name="surName"
                onChange={this.handleChange}
                noValidate
              />
              {errors.surName.length > 0 && (
                <span className="error">{errors.surName}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
            </div>
            <div className="tel">
              <label htmlFor="tel">Telefon</label>
              <input
                type="text"
                name="tel"
                onChange={this.handleChange}
                noValidate
              />
              {errors.tel.length > 0 && (
                <span className="error">{errors.tel}</span>
              )}
            </div>
            <div className="education">
              <label htmlFor="education">Niveli i studimit</label>
              <select name="education" onChange={this.handleChange} noValidate>
                <option value="bachelor">Bachelor</option>
                <option value="mssh">Master Shkencor</option>
                <option value="msp">Master Profesional</option>
              </select>
              {errors.education.length > 0 && (
                <span className="error">{errors.education}</span>
              )}
            </div>
            <div className="education_year">
              <label htmlFor="education_year">Viti aktual i studimit</label>
              <input
                type="text"
                name="education_year"
                onChange={this.handleChange}
                noValidate
              />
              {errors.education_year.length > 0 && (
                <span className="error">{errors.education_year}</span>
              )}
            </div>
            <div className="education_faculty">
              <label htmlFor="education_faculty">
                Fakulteti ne te cilin studioni
              </label>
              <select
                name="education_faculty"
                onChange={this.handleChange}
                noValidate
              >
                <option value="ekonomia">Fakulteti i Ekonomise</option>
                <option value="drejtesia">Fakulteti i Drejtesise</option>
                <option value="histori">
                  Fakulteti i Historise dhe Filologjise
                </option>
                <option value="fshn">Fakulteti i Shkencave Natyrore</option>
                <option value="fshs">Fakulteti i Shkencave Sociale</option>
                <option value="fgjh">Fakulteti i Gjuheve te Huaja</option>
              </select>
              {errors.education_faculty.length > 0 && (
                <span className="error">{errors.education_faculty}</span>
              )}
            </div>
            <div className="department">
              <label htmlFor="department">Departamenti</label>
              <input
                type="text"
                name="department"
                onChange={this.handleChange}
                noValidate
              />
              {errors.department.length > 0 && (
                <span className="error">{errors.department}</span>
              )}
            </div>
            <div className="winner_scholarship">
              <label htmlFor="winner_scholarship">
                Jeni shpallur me pare fitues i Bursave ne kuader te programit
                Erasmus+?
              </label>
              <select
                name="winner_scholarship"
                onChange={this.handleChange}
                noValidate
              >
                <option value="po">Po</option>
                <option value="jo">Jo</option>
              </select>
              {errors.winner_scholarship.length > 0 && (
                <span className="error">{errors.winner_scholarship}</span>
              )}
            </div>
            <p>Nese po:</p>
            <br />
            <div className="uni_erasmus">
              <label htmlFor="uni_erasmus">Ne cilin universitet?</label>
              <input
                type="text"
                name="uni_erasmus"
                onChange={this.handleChange}
                noValidate
              />
              {errors.uni_erasmus.length > 0 && (
                <span className="error">{errors.uni_erasmus}</span>
              )}
            </div>
            <div className="year_erasmus">
              <label htmlFor="year_erasmus">Ne cilin vit?</label>
              <input
                type="text"
                name="year_erasmus"
                onChange={this.handleChange}
                noValidate
              />
              {errors.year_erasmus.length > 0 && (
                <span className="error">{errors.year_erasmus}</span>
              )}
            </div>
            <p>Dokumentet per t'u upload-uar:</p>
            <br />
            <div className="cv">
              <label htmlFor="cv">Zgjidh CV-ne</label>
              <input
                type="file"
                name="cv"
                onChange={this.handleChange}
                noValidate
              />
              {errors.cv.length > 0 && (
                <span className="error">{errors.cv}</span>
              )}
            </div>
            <div className="passport">
              <label htmlFor="passport">Zgjidh kopjen e pasaportes</label>
              <input
                type="file"
                name="passport"
                onChange={this.handleChange}
                noValidate
              />
              {errors.passport.length > 0 && (
                <span className="error">{errors.passport}</span>
              )}
            </div>
            <div className="list_marks">
              <label htmlFor="list_marks">
                Zgjidh Listen e Notave ne Gjuhen Shqipe Bachelor
              </label>
              <input
                type="file"
                name="list_marks"
                onChange={this.handleChange}
                noValidate
              />
              {errors.list_marks.length > 0 && (
                <span className="error">{errors.list_marks}</span>
              )}
            </div>
            <div className="list_marks_official">
              <label htmlFor="list_marks_official">
                Zgjidh Listen e Notave te Perkthyer ne Menyre Zyrtare Bachelor
              </label>
              <input
                type="file"
                name="list_marks_official"
                onChange={this.handleChange}
                noValidate
              />
              {errors.list_marks_official.length > 0 && (
                <span className="error">{errors.list_marks_official}</span>
              )}
            </div>
            <div className="student_document">
              <label htmlFor="student_document">
                Zgjidh Vertetim Studenti ne Gjuhen Shqipe Bachelor
              </label>
              <input
                type="file"
                name="student_document"
                onChange={this.handleChange}
                noValidate
              />
              {errors.student_document.length > 0 && (
                <span className="error">{errors.student_document}</span>
              )}
            </div>
            <div className="official_student_document">
              <label htmlFor="official_student_document">
                Zgjidh Vertetim Studenti te Perkthyer ne Menyre Zyrtare Bachelor
              </label>
              <input
                type="file"
                name="official_student_document"
                onChange={this.handleChange}
                noValidate
              />
              {errors.official_student_document.length > 0 && (
                <span className="error">
                  {errors.official_student_document}
                </span>
              )}
            </div>
            <div className="foreign_language_certificate">
              <label htmlFor="foreign_language_certificate">
                Zgjidh Certifikaten e Gjuhes se Huaj
              </label>
              <input
                type="file"
                name="foreign_language_certificate"
                onChange={this.handleChange}
                noValidate
              />
            </div>
            <div className="submit">
              <button>Apliko</button>
            </div>
            {this.state.errorCount !== null ? (
              <p className="form-status">
                Aplikimi eshte {formValid ? "i rregullt ✅" : "i parregullt ❌"}
              </p>
            ) : (
              "Forma nuk eshte derguar"
            )}
          </form>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
