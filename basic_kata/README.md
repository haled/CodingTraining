# Basic Kata

## Overview
The basic kata that everyone learns is "Hello World."  In this kata, you are simply trying to get a program to render the phrase "Hello World."  This _kata_ is the de facto starting point for most programmers to learn a new language, environment, etc.  The basic premise is that if you can get a basic string to render somewhere, you have figured out quite a lot about the current environment.  Below, I will use this basic kata to explore a few different concepts.

## Kata Definition
Problem:  Display the string "Hello World" on the command line.

## Basic Implementation - Create a New .NET Core Project

### Goals
The goal of this implementation is to get familiar with the .NET Core command line interface (CLI). We will use the kata to generate a new application, create a solution file, connect the project to the solution, and run the application. This kata is *not* addressing build and deployment concerns.

### Implementation
1. mkdir basic_kata                   ```create a folder to hold the project files```
2. cd basic_kata                      ```move into the newly created folder```
3. dotnet new console                 ```use the dotnet CLI to generate a new console app```
4. dotnet new sln                     ```create an SLN file for the project```
5. dotnet sln add basic_kata.csproj   ```add the console app project to the SLN```
6. dotnet run                         ```run the application and see "Hello World"```
