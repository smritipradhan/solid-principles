# solid-principles

# SRP :-

The goal of this principle is:
-> Break large components that do too much into smaller components.
-> Extract code unrelated to the main component functionality into separate utility functions ( -> DateUtils, some businesses can be used in different places).
Move all business logic of the component into custom hooks ( useEffect, handlers, states ).

# OCP :-

The goal of this principle is:
-> Make it easier to add new features to a software system without affecting the existing functionality.
-> This helps to make a software system more mmaintainable and extensible.
-> Reduce the risk of breaking existing functionality.

# LSP :-

The goal of this principle is:
-> In React, we don’t use inheritance to reduce duplicate code between components. We recommend using composition instead of inheritance to reuse code between components Link.
-> To enable the reuse and composition of components in a flexible and maintainable way.
-> By following this principle, you can create a set of flexible, interchangeable components that can be easily composed to create more complex UI elements.

# ISP:-

The goal of this principle is:
->  Improved maintainability: By creating smaller, more focused components, you can make it easier to understand and modify the codebase. This can save time and effort when making changes to the application.
-> Increased flexibility: By minimizing dependencies between components, you can make it easier to reuse and refactor components. This can make it easier to add new features or make changes to the application.

# DIP :-
The goal of this principle is:
High-level modules should not depend on low-level modules. Both should depend on abstractions.
Making it easier to test components in isolation, by removing dependencies on external services or other components.
Decoupling components from one another, so that changes to one component don't require changes to others.