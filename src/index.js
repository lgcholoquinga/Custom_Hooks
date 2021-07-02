/* REACT */
import React from "react";
import ReactDOM from "react-dom";

/* CSS */
import "./index.css";

/* COMPONENTS */
//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-use-state/CounterApp';
//import { CounterWithCustomHook } from './components/01-use-state/CounterWithCustomHook';
// import { SimpleForm } from './components/02-use-effect/SimpleForm';
// import { FormWithCustomHook } from './components/02-use-effect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from "./components/04-use-ref/FocusScreen";
//import { RealExampleRef } from "./components/04-use-ref/RealExampleRef";
//import { LayoutEffect } from "./components/05-use-layout-effect/LayoutEffect";
//import { Memorize } from "./components/06-use-memo/Memorize";
//import { MemoHook } from "./components/06-use-memo/MemoHook";
//import { CallBackHook } from "./components/06-use-memo/CallBackHook";
// import { Padre } from "./components/07-tarea-memo/Padre";
// import "./components/08-use-reducer/intro-reduce";
import { TodoApp } from "./components/08-use-reducer/TodoApp";

ReactDOM.render(<TodoApp />, document.getElementById("root"));
