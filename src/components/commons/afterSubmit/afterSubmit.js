import React from 'react';
import { reset } from "redux-form";

const afterSubmit = (result, fdsfds) => fdsfds(reset("newPost"))

export default afterSubmit;