import { AppDataSource } from "../data-source"
import { Subject } from "../entities/Subject"

export const subjetcRepository = AppDataSource.getRepository(Subject)