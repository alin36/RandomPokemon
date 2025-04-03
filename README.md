# Random Pokémon Generator

This project uses the **PokeAPI** and **Axios** to fetch random Pokémon data and dynamically display the Pokémon's sprite and name when the button is clicked.

## Features:
- **Automatic Pokémon generation**: Upon page load, a random Pokémon is generated and displayed.
- **Generate button**: Clicking the "Generate" button fetches a new random Pokémon each time, updating both the sprite and the name.
- **Formatted Pokémon name**: The Pokémon's name is properly capitalized and displayed.

## How it works:
1. **Axios API calls**: The app uses **Axios** to interact with the **PokeAPI** to fetch Pokémon data. Axios is a promise-based HTTP client that helps in making API requests. The Pokémon data, including the sprite and name, is fetched by making a `GET` request to the PokeAPI using a randomly generated Pokémon ID.

2. **Generating random Pokémon**: The `generate` function is called when the page loads or when the "Generate" button is clicked. It works as follows:
   - A random ID between 1 and 898 (the total number of Pokémon) is generated using `Math.random()`.
   - Two separate Axios requests are made to the PokeAPI for the Pokémon data:
     1. The first request fetches the Pokémon sprite and updates the image displayed on the page.
     2. The second request fetches the Pokémon's name, formats it (capitalizes the first letter), and updates the title displayed on the page.

3. **Display updates**: 
   - The Pokémon sprite is displayed using the ID `#poke-pic`.
   - The Pokémon's name is formatted and displayed in the title using the ID `#title`.

## Future Improvements
- **Add more detailed Pokémon information like type, abilities, and a short description to create a full Pokédex-style interface.
