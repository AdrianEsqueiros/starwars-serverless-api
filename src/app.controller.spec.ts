import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { DynamoDBService } from './dynamo-db/dynamo-db.service';
import { Translate } from './utils/translate';
import { InternalServerErrorException } from '@nestjs/common';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService, DynamoDBService, Translate],
    }).compile();

    appService = module.get<AppService>(AppService);
  });

  describe('getPeopleFromSWApi', () => {
    it('should fetch and process people data correctly', async () => {
      const mockData = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.py4e.com/api/planets/1/',
        films: [
          'https://swapi.py4e.com/api/films/1/',
          'https://swapi.py4e.com/api/films/2/',
          'https://swapi.py4e.com/api/films/3/',
          'https://swapi.py4e.com/api/films/6/',
          'https://swapi.py4e.com/api/films/7/',
        ],
        species: ['https://swapi.py4e.com/api/species/1/'],
        vehicles: [
          'https://swapi.py4e.com/api/vehicles/14/',
          'https://swapi.py4e.com/api/vehicles/30/',
        ],
        starships: [
          'https://swapi.py4e.com/api/starships/12/',
          'https://swapi.py4e.com/api/starships/22/',
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.py4e.com/api/people/1/',
      };
      const mockProcessedData = {
        id: '9e5b210a-755f-40e7-8c93-b70860bb45e2',
        nombre: 'Luke Skywalker',
        altura: '172',
        masa: '77',
        color_pelo: 'blond',
        color_piel: 'fair',
        color_ojos: 'blue',
        año_nacimiento: '19BBY',
        género: 'male',
        mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
        películas: [
          'https://swapi.py4e.com/api/films/1/',
          'https://swapi.py4e.com/api/films/2/',
          'https://swapi.py4e.com/api/films/3/',
          'https://swapi.py4e.com/api/films/6/',
          'https://swapi.py4e.com/api/films/7/',
        ],
        especie: ['https://swapi.py4e.com/api/species/1/'],
        vehículos: [
          'https://swapi.py4e.com/api/vehicles/14/',
          'https://swapi.py4e.com/api/vehicles/30/',
        ],
        naves_estelares: [
          'https://swapi.py4e.com/api/starships/12/',
          'https://swapi.py4e.com/api/starships/22/',
        ],
        creado: '2014-12-09T13:50:51.644000Z',
        editado: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.py4e.com/api/people/1/',
        createdAt: '2023-08-31T10:08:18.336Z',
        updatedAt: '2023-08-31T10:08:18.336Z',
      };
      jest.spyOn(appService, 'fetchDataFromAPI').mockResolvedValue(mockData);
      jest
        .spyOn(appService, 'processData')
        .mockResolvedValue(mockProcessedData);

      const result = await appService.getPeopleFromSWApi(1);

      const expectedProcessedData = {
        id: '9e5b210a-755f-40e7-8c93-b70860bb45e2',
        nombre: 'Luke Skywalker',
        altura: '172',
        masa: '77',
        color_pelo: 'blond',
        color_piel: 'fair',
        color_ojos: 'blue',
        año_nacimiento: '19BBY',
        género: 'male',
        mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
        películas: [
          'https://swapi.py4e.com/api/films/1/',
          'https://swapi.py4e.com/api/films/2/',
          'https://swapi.py4e.com/api/films/3/',
          'https://swapi.py4e.com/api/films/6/',
          'https://swapi.py4e.com/api/films/7/',
        ],
        especie: ['https://swapi.py4e.com/api/species/1/'],
        vehículos: [
          'https://swapi.py4e.com/api/vehicles/14/',
          'https://swapi.py4e.com/api/vehicles/30/',
        ],
        naves_estelares: [
          'https://swapi.py4e.com/api/starships/12/',
          'https://swapi.py4e.com/api/starships/22/',
        ],
        creado: '2014-12-09T13:50:51.644000Z',
        editado: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.py4e.com/api/people/1/',
        createdAt: '2023-08-31T10:08:18.336Z',
        updatedAt: '2023-08-31T10:08:18.336Z',
      };

      expect(result).toEqual(JSON.stringify(expectedProcessedData));
    });

    it('should throw InternalServerErrorException on error', async () => {
      jest
        .spyOn(appService, 'fetchDataFromAPI')
        .mockRejectedValue(new Error('API error'));

      await expect(appService.getPeopleFromSWApi(1)).rejects.toThrow(
        InternalServerErrorException,
      );
    });
  });
});
