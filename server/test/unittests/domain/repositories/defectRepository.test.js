﻿import "babel-polyfill"

import DefectRepository from "../../../../src/domain/repositories/defectRepository.js"
import MockDbManager from "../../../setup/mockDbManager.js";
import {DefectQueryResultModel} from "../../../../src/domain/models/queryResults/defectQRMs.js";


describe("defectRepository.Tests", ()=> {

    describe("generate.Class.Tests",()=>{
        it("should get Error 'dbManager' when generate instance of DefectRepository class without fill constructor params",()=>{
            try {
                let qrm = new DefectRepository();
                expect(qrm).toBe(null);
            } catch (e) {
                expect(e).toBeDefined();
                expect(e.message).toBe("dbManager must be set to DefectRepository constructor");
            }

        })
    })
    
    describe("functions.Tests",()=>{
        let pool;
        let rows;
        beforeEach(() => {
            pool = {}
            rows = [];
        })
        afterEach(() => {
            pool = {}
            rows = [];
        })

        const exec = async () => {
            const mockedMg = new MockDbManager(pool,rows);
            return new DefectRepository(mockedMg);
        }

        describe("existAsync.Tests", async ()=>{
            it("should return false", async () => {
                rows = [{total:0}]
                const defectRepo = await exec();
                const actual = await defectRepo.existAsync(1);
                expect(actual).toBe(false);
            });

            it("should return true", async () => {
                rows = [{total:1}]
                const defectRepo = await exec();
                const actual = await defectRepo.existAsync(1);
                expect(actual).toBe(true);
            });

            it("should return exception with null param", async () => {
                rows = [{total:0}]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.existAsync(null);
                    expect(actual).toBe(false);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("id must be set to existAsync param");
                }

            });
        })

        describe("existByConditionsAsync.Tests", async ()=>{
            it("should return false", async () => {
                rows = [{total:0}]
                const filterDefect = {
                    machine_id : 1,
                    defect_time: 'defectTime'
                };
                
                const defectRepo = await exec();
                const actual = await defectRepo.existByConditionsAsync(filterDefect);
                expect(actual).toBe(false);
            });

            it("should return true", async () => {
                rows = [{total:1}]
                const filterDefect = {
                    machine_id : 1,
                    defect_time: 'defectTime'
                };
                const defectRepo = await exec();
                const actual = await defectRepo.existByConditionsAsync(1);
                expect(actual).toBe(true);
            });

            it("should return exception with null param", async () => {
                rows = [{total:0}]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.existByConditionsAsync(null);
                    expect(actual).toBe(false);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("whereQry must be set to existByConditionsAsync param");
                }

            });
        })

        describe("insertAsync.Tests", async ()=>{
            it("should return id", async () => {
                rows = [
                        {id:1}
                    ]
                const dbModel = {};

                const defectRepo = await exec();
                const actual = await defectRepo.insertAsync(dbModel);
                expect(actual).toBe(rows[0].id);
            });

            it("should return exception with null param", async () => {
                rows = [{total:0}]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.insertAsync(null);
                    expect(actual).toBe(false);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("data must be set to insertAsync param");
                }

            });
        })

        describe("updateAsync.Tests", async ()=>{
            it("should return defined rowCount", async () => {
                rows = [
                    {id:1}
                ]
                const dbModel = {defectTime:'test'};

                const defectRepo = await exec();
                const actual = await defectRepo.updateAsync(1,dbModel);
                expect(actual.rowCount).toBe(1);
            });

            it("should return exception 'id' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.updateAsync(null,null);
                    expect(actual).toBe(false);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("id must be set to updateAsync param");
                }

            });

            it("should return exception 'data' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.updateAsync(1,null);
                    expect(actual).toBe(null);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("data must be set to updateAsync param");
                }

            });
        })

        describe("updateByConditionsAsync.Tests", async ()=>{
            it("should return defined rowCount", async () => {
                rows = [
                    {id:1}
                ]
                const filterDefect = {
                    machine_id : 1,
                    defect_time: 'defectTime'
                };
                
                const dbModel = {defectTime:'test'};

                const defectRepo = await exec();
                const actual = await defectRepo.updateByConditionsAsync({whereQry:filterDefect,data:dbModel});
                expect(actual.rowCount).toBe(1);
            });

            it("should return exception 'whereQry' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.updateByConditionsAsync({});
                    expect(actual).toBe(false);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("whereQry must be set to updateByConditionsAsync param");
                }
            });

            it("should return exception 'data' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.updateByConditionsAsync({whereQry:{},data:null});
                    expect(actual).toBe(null);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("data must be set to updateByConditionsAsync param");
                }

            });
        })

        describe("deleteAsync.Tests", async ()=>{
            it("should return defined rowCount", async () => {
                rows = [
                    {id:1}
                ]

                const defectRepo = await exec();
                const actual = await defectRepo.deleteAsync(1);
                console.log(actual);
                expect(actual.rowCount).toBe(1);
            });

            it("should return exception 'id' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.deleteAsync(null);
                    expect(actual).toBe(null);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("id must be set to deleteAsync param");
                }

            });
        })

        describe("fetchOneAsync.Tests", async ()=>{
            it("should return an object to be instance of DefectQueryResultModel class", async () => {
                rows = [
                    {id:1}
                ]

                const defectRepo = await exec();
                const actual = await defectRepo.fetchOneAsync(1);
                expect(actual).toBeInstanceOf(DefectQueryResultModel);
            });

            it("should return null", async () => {
                rows = []

                const defectRepo = await exec();
                const actual = await defectRepo.fetchOneAsync(1);
                expect(actual).toBe(null);
            });

            it("should return exception 'id' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.fetchOneAsync(null);
                    expect(actual).toBe(null);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("id must be set to fetchOneAsync param");
                }

            });
        })

        describe("fetchAllAsync.Tests", async ()=>{
            it("should return an object to be instance of DefectQueryResultModel class", async () => {
                rows = [
                    {id:1},{id:2}
                ]

                const defectRepo = await exec();
                const actual = await defectRepo.fetchAllAsync({});
                expect(actual).toBeInstanceOf(Array);
                expect(actual.length).toBe(rows.length);
            });
        })

        describe("fetchAllJoinWorkerRegistryFilterByStatusAsync.Tests", async ()=>{
            it("should return an object to be instance of DefectQueryResultModel class", async () => {
                rows = [
                    {id:1,personal_number:"test"}
                ]

                const defectRepo = await exec();
                const actual = await defectRepo.fetchAllJoinWorkerRegistryFilterByStatusAsync(1);
                console.log(actual);
                expect(actual).toBeInstanceOf(Array);
                expect(actual[0].id).toBe(rows[0].id);
                expect(actual[0].personal_number).toBe(rows[0].personal_number);
            });

            it("should return null", async () => {
                rows = []

                const defectRepo = await exec();
                const actual = await defectRepo.fetchAllJoinWorkerRegistryFilterByStatusAsync(1);
                expect(actual).toBeInstanceOf(Array);
            });

            it("should return exception 'status' with null param", async () => {
                rows = [
                    {id:1}
                ]
                const defectRepo = await exec();
                try{
                    const actual = await defectRepo.fetchAllJoinWorkerRegistryFilterByStatusAsync(null);
                    expect(actual).toBe(null);
                }
                catch (e){
                    expect(e).toBeDefined();
                    expect(e.internalError).toBe("status must be set to fetchAllJoinWorkerRegistryFilterByStatusAsync param");
                }

            });
        })
    })
})