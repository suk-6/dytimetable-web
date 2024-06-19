"use client";

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";
import { useMemo } from "react";

const initializeModeStore = () => {
	const store = configureStore({ reducer: rootReducer });
	return store;
};

export const ModeStore = () => {
	const store = useMemo(() => initializeModeStore(), []);
	return store;
};
