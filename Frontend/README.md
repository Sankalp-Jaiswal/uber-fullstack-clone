# Uber Frontend Routes

This document provides a detailed description of each route in the Uber Frontend project.

## Routes

### `/`
- **Description**: The home page of the application. It provides an introduction and a link to continue to the login page.
- **Component**: `Home`

### `/login`
- **Description**: The user login page where users can enter their email and password to log in.
- **Component**: `Userlogin`

### `/signup`
- **Description**: The user signup page where new users can register by providing their email, name, and password.
- **Component**: `UserSignup`

### `/captain-login`
- **Description**: The captain login page where captains can enter their email and password to log in.
- **Component**: `CaptainLogin`

### `/captain-signup`
- **Description**: The captain signup page where new captains can register by providing their email, name, password, and vehicle details.
- **Component**: `Captainsignup`

### `/home`
- **Description**: The user dashboard page that is accessible only after logging in. It displays user-specific information and options.
- **Component**: `Dashboard` (wrapped with `UserWrapper`)

### `/user/logout`
- **Description**: The user logout page that logs out the user and redirects them to the login page.
- **Component**: `Userlogout` (wrapped with `UserWrapper`)

### `/captain-home`
- **Description**: The captain dashboard page that is accessible only after logging in. It displays captain-specific information and options.
- **Component**: `CaptainDashboard` (wrapped with `CaptainWrapper`)

### `/captain/logout`
- **Description**: The captain logout page that logs out the captain and redirects them to the captain login page.
- **Component**: `CaptainLogout` (wrapped with `CaptainWrapper`)

## Context and Approach

### UserWrapper
- **Context**: `UserDataContext`
- **Approach**: The `UserWrapper` component checks if a user token is present in local storage. If not, it redirects the user to the login page. This ensures that only authenticated users can access the wrapped components.

### CaptainWrapper
- **Context**: `CaptainDataContext`
- **Approach**: The `CaptainWrapper` component checks if a captain token is present in local storage. If not, it redirects the captain to the captain login page. Additionally, it fetches the captain's profile data using the token and sets it in the context. This ensures that only authenticated captains can access the wrapped components and have their data available in the context.

## Usage

To navigate to any of these routes, use the corresponding URL path in your browser or use the provided links within the application.
