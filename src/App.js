import React, { Component } from "react";
import Amplify, { graphqlOperation } from "aws-amplify";
import { withAuthenticator, Connect } from "aws-amplify-react";

import "./App.css";

import awsConfig from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";

Amplify.configure(awsConfig);
export default withAuthenticator(App, true);
