import React from "react";
import { Input } from "../../commons/FormControls/FormControls";
import s from "./ProfileInfo.module.css";
import styles from "../../commons/FormControls/FormControls.module.css"
import ProfileName from "./ProfileName";
import { Field, reduxForm } from "redux-form";

const ProfileDataForm = (props) => {
   console.log(props.error);
  return (
    <form onSubmit={props.handleSubmit}>
      <button>Save</button>
      {props.error && <div className={styles.formSubmitError}>
            {props.error}
         </div>}
      <div>
        <div>
          <b>Full name:</b>
        </div>
        <div>
          <Field name={"fullName"} component={Input} />
        </div>
      </div>
      <div>
        <div>
          <b>Looking for a job: </b>
        </div>
        <div>
          <Field name={"lookingForAJob"} component={Input} type="checkbox" />
        </div>
      </div>
      <div>
        <div>
          <b>Skills: </b>
        </div>
        <div>
          <Field name={"lookingForAJobDescription"} component={Input} />
        </div>
      </div>
      <div>
        <b>Contacts:</b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              {key}:{" "}
              <Field
                name={`contacts.${key}`}
                component={Input}
                type="text"
                placeholder={key}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ReduxProfileDataForm = reduxForm({ form: "ProfileForm" })(
  ProfileDataForm
);
export default ReduxProfileDataForm;
