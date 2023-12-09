import { PrismaClient } from "@prisma/client";
import { envs } from "./config/plugins/envs.plugin";
import { LogModel, MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async() => {
    main();
})();


async function main(){
    
    // await MongoDatabase.connect({
    //     mongoUrl: envs.MONGO_URL,
    //     dbName: envs.MONGO_DB_NAME,
    // })

    // TODO: Crear una coleccion = tablas, documento = registro
    // const newLog = await LogModel.create({
    //     message: 'Test message desde mongo',
    //     origin: 'App.ts',
    //     level: 'low'
    // });

    // await newLog.save();

    // console.log(newLog);


    //TODO: Encontrar log
    // const logs = await LogModel.find();
    // console.log(logs);


    // const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Test message desde Prisma',
    //         origin: 'App.ts'
    //     }
    // });

    // console.log(newLog);

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'MEDIUM'
    //     }
    // });
    // console.log(logs)

    // Server.start();
}