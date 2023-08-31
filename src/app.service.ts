import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { DynamoDBService } from './dynamo-db/dynamo-db.service';
import { Translate } from './utils/translate';

@Injectable()
export class AppService {
  private readonly baseUrl = 'https://swapi.py4e.com/api';
  private readonly translator: Translate;
  constructor(
    private readonly dynamoDBService: DynamoDBService,
    translator: Translate,
  ) {
    this.translator = translator;
  }
  async getPeopleFromSWApi(id: number): Promise<string> {
    try {
      const data = await this.fetchDataFromAPI(`${this.baseUrl}/people/${id}/`);
      const processedData = await this.processData(data);
      await this.dynamoDBService.put('CharactersCollection', processedData);
      return JSON.stringify(processedData);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getFilmsFromSWApi(id: number): Promise<string> {
    try {
      const data = await this.fetchDataFromAPI(`${this.baseUrl}/films/${id}/`);
      const opening_crawl = await this.translator.translateText(
        data.opening_crawl,
      );
      console.log(opening_crawl);
      const processedData = await this.processData({ ...data, opening_crawl });
      await this.dynamoDBService.put('FilmsCollection', processedData);
      return JSON.stringify(processedData);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getPlanetsFromSWApi(id: number): Promise<string> {
    try {
      const data = await this.fetchDataFromAPI(
        `${this.baseUrl}/planets/${id}/`,
      );
      const processedData = await this.processData(data);
      await this.dynamoDBService.put('PlanetsCollection', processedData);
      return JSON.stringify(processedData);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getSpeciesFromSWApi(id: number): Promise<string> {
    try {
      const data = await this.fetchDataFromAPI(
        `${this.baseUrl}/species/${id}/`,
      );
      const processedData = await this.processData(data);
      await this.dynamoDBService.put('SpeciesCollection', processedData);
      return JSON.stringify(processedData);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getStarshipsFromSWApi(id: number): Promise<string> {
    try {
      const data = await this.fetchDataFromAPI(
        `${this.baseUrl}/starships/${id}/`,
      );
      const processedData = await this.processData(data);
      await this.dynamoDBService.put('StarshipsCollection', processedData);
      return JSON.stringify(processedData);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async fetchDataFromAPI(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw new Error('Error fetching data');
    }
  }
  async processData(data: any): Promise<Record<string, any>> {
    const attributeKeys = Object.keys(data);
    const attributeValues = attributeKeys.map((key) => data[key]);
    const keysString = attributeKeys.join(`\n `);
    const translatedKeysString = await this.translator.translateText(
      keysString,
    );
    const dataArray = translatedKeysString.split('\n ');
    const dataObject: { [key: string]: string } = {};
    dataArray.forEach((item, index) => {
      const key = dataArray[index];
      const modifiedKey = key.replace(/ /g, '_');
      const value = attributeValues[index];
      dataObject[modifiedKey] = value;
    });
    const response = {
      id: uuidv4(),
      ...dataObject,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return response;
  }
}
