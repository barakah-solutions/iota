/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";

import HomePage from "@pages/HomePage";

import "@stylesheets/fonts.scss";
import "@stylesheets/tailwind.scss";

const root = document.getElementById("root");

render(() => <Router root={HomePage}></Router>, root!);
