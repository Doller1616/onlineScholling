import React from 'react'
import SignInSignUp from '@Students/Pages/SignInSignUp';
import Dashboard from '@Students/Pages/Dashboard';
import Home from '@Students/Pages/Home';
import Syllabus from '@Students/Pages/Syllabus';
import Lectures from '@Students/Pages/Lectures';

export default [
    { path:'/signin', component: SignInSignUp, exect:true },
    { path:'/dashboard', component: Dashboard },
    { path:'/dashboard/home', component: Home },
    { path:'/dashboard/syllabus', component: Syllabus },
    { path:'/dashboard/lectures', component: Lectures },
]