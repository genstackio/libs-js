import { createContext } from 'react';
import { template_context_value } from '../types';

export const TemplateContext = createContext<template_context_value>({});
export const TemplateContextProvider = TemplateContext.Provider;
export const TemplateContextConsumer = TemplateContext.Consumer;
export default TemplateContext;
