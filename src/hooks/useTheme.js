import React from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
