import { Test, TestingModule } from '@nestjs/testing';
import { PeopleService } from './people.service';
import { DynamoDBService } from '../dynamo-db/dynamo-db.service';
import { v4 as uuidv4 } from 'uuid';

describe('PeopleService', () => {
  let peopleService: PeopleService;
  let dynamoDBService: DynamoDBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleService, DynamoDBService],
    }).compile();

    peopleService = module.get<PeopleService>(PeopleService);
    dynamoDBService = module.get<DynamoDBService>(DynamoDBService);
  });

  it('should be defined', () => {
    expect(peopleService).toBeDefined();
  });

  describe('create', () => {
    it('should create a person', async () => {
      const createPersonDto = {
        nombre: 'Luke Skywalker',
        altura: 172,
        masa: 77,
        color_pelo: 'rubio',
        color_piel: 'blanco',
        color_ojos: 'azul',
        año_nacimiento: '19 ABY',
        género: 'masculino',
        mundo_natal: 'Tatooine',
        películas: [],
        especie: [],
        vehículos: [],
        naves_estelares: [],
      };
      const mockCreatedPerson = { ...createPersonDto, id: uuidv4() };

      jest.spyOn(dynamoDBService, 'put').mockResolvedValue(mockCreatedPerson);

      const result = await peopleService.create(createPersonDto);

      expect(result).toEqual(mockCreatedPerson);
    });
  });

  describe('findAll', () => {
    it('should return an array of people', async () => {
      const mockPeople = [
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T10:08:17.675Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T10:08:17.675Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: '3612d394-057c-4f49-9e33-b09cd377b52d',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T10:08:18.336Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T10:08:18.336Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: '9e5b210a-755f-40e7-8c93-b70860bb45e2',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T09:26:42.458Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T09:26:42.458Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: 'a93ca152-7969-4806-a8ba-e5ba0922d3cb',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T09:51:57.296Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T09:51:57.296Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: '14d8231c-41a7-437d-b6e6-c97cb5abeb8f',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T09:51:52.278Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T09:51:52.278Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: '66e31473-e5c7-4ae8-a13a-269ea42a94fd',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T10:17:18.994Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T10:17:18.994Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: 'ef5a16e6-7df7-4c91-8850-2535d108bacb',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: 77,
          altura: 172,
          naves_estelares: [],
          color_pelo: 'rubio',
          género: 'masculino',
          mundo_natal: 'Tatooine',
          especie: [],
          vehículos: [],
          color_piel: 'blanco',
          películas: [],
          id: 'b611845c-79a2-4b9d-810c-347792e74d45',
          color_ojos: 'azul',
          año_nacimiento: '19 ABY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T10:15:09.184Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T10:15:09.184Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: 'a42b9807-9610-4226-ad94-ad8ee4e8b5a2',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T10:00:07.286Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T10:00:07.286Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: '6a7070f0-3309-4426-b3b8-cdc9d69f1009',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
        {
          nombre: 'Luke Skywalker',
          masa: '77',
          altura: '172',
          createdAt: '2023-08-31T09:34:30.448Z',
          url: 'https://swapi.py4e.com/api/people/1/',
          naves_estelares: [
            'https://swapi.py4e.com/api/starships/12/',
            'https://swapi.py4e.com/api/starships/22/',
          ],
          color_pelo: 'blond',
          género: 'male',
          mundo_natal: 'https://swapi.py4e.com/api/planets/1/',
          especie: ['https://swapi.py4e.com/api/species/1/'],
          updatedAt: '2023-08-31T09:34:30.448Z',
          vehículos: [
            'https://swapi.py4e.com/api/vehicles/14/',
            'https://swapi.py4e.com/api/vehicles/30/',
          ],
          editado: '2014-12-20T21:17:56.891000Z',
          color_piel: 'fair',
          películas: [
            'https://swapi.py4e.com/api/films/1/',
            'https://swapi.py4e.com/api/films/2/',
            'https://swapi.py4e.com/api/films/3/',
            'https://swapi.py4e.com/api/films/6/',
            'https://swapi.py4e.com/api/films/7/',
          ],
          creado: '2014-12-09T13:50:51.644000Z',
          id: 'a80e6281-4cde-4248-8a5f-a9a47fcb5fe2',
          color_ojos: 'blue',
          año_nacimiento: '19BBY',
        },
      ];

      jest.spyOn(dynamoDBService, 'scan').mockResolvedValue(mockPeople);

      const result = await peopleService.findAll();

      expect(result).toEqual(mockPeople);
    });
  });

  describe('findOne', () => {
    it('should return a person by ID', async () => {
      const personId = '3612d394-057c-4f49-9e33-b09cd377b52d';
      const mockPerson = {
        id: personId,
        nombre: 'Luke Skywalker',
        altura: 172,
        masa: 77,
        color_pelo: 'rubio',
        color_piel: 'blanco',
        color_ojos: 'azul',
        año_nacimiento: '19 ABY',
        género: 'masculino',
        mundo_natal: 'Tatooine',
        películas: [],
        especie: [],
        vehículos: [],
        naves_estelares: [],
      };

      jest.spyOn(dynamoDBService, 'get').mockResolvedValue(mockPerson);

      const result = await peopleService.findOne(personId);

      expect(result).toEqual(mockPerson);
    });
  });

  describe('remove', () => {
    it('should remove a person by ID', async () => {
      const personId = '3612d394-057c-4f49-9e33-b09cd377b52d';

      jest.spyOn(dynamoDBService, 'delete').mockResolvedValue({});

      const result = await peopleService.remove(personId);

      expect(result).toEqual({});
    });
  });
});
