import { createCommentFromSpecificGame } from "../src/endpoints";
import jest from 'jest-mock';


global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({
        "name": "Skyrim",
        "image": "https://upload.wikimedia.org/wikipedia/pt/thumb/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png/270px-The_Elder_Scrolls_5_Skyrim_capa.png",
        "genre": "RPG",
        "avarage_score": 8,
        "graphic_cards": [
          "GTX 660",
          "GTX 1050 Ti",
          "GTX 1650",
          "RTX 3060",
          "RX 6400"
        ],
        "comments": [],
        "id": "8f06"
      },
      {
        "name": "CS2",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.ign.com%2Fcounter-strike-2&psig=AOvVaw1tyZ_RlzIKNMBEsGUxiapx&ust=1741378248105000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPju69Ch9osDFQAAAAAdAAAAABAJ",
        "genre": "FPS",
        "avarage_score": 0,
        "graphic_cards": [
          "GTX 1650",
          "RX 6400",
          "Intel Arc A380",
          "GTX 1050 Ti",
          "RTX 3060"
        ],
        "comments": [
          {
            "id": 1,
            "user": "Henrique",
            "score": 7,
            "comment": "Melhor FPS do mercado"
          }
        ],
        "id": "8f04"
      },
      {
        "name": "Final Fantasy 13",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.square-enix-games.com%2Fpt_BR%2Fgames%2Ffinal-fantasy-xiii&psig=AOvVaw3qSgei2UOpNUUopKu5nTZk&ust=1741377646490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODOi7Wf9osDFQAAAAAdAAAAABAS",
        "genre": "RPG",
        "avarage_score": 0,
        "graphic_cards": [
          "GTX 660",
          "GTX 1050 Ti",
          "GTX 1650",
          "RTX 3060",
          "RX 6400"
        ],
        "comments": [],
        "id": "8f05"
      }),
    })
  );

  describe('Testando a função createCommentFromSpecificGame', () => {
    it('Deve adicionar um comentário ao jogo', async () => {
        const gameName = 'Skyrim';
        const comment = {
            "id": 1,
            "user": "Henrique",
            "score": 10,
            "comment": "Melhor RPG do mercado"
        }

        fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve({ ...comment }),
        });

        const result = await createCommentFromSpecificGame(gameName, comment);

        expect(result).toBe(`Comentário adicionado ao jogo ${gameName}`)
          
    })
  })