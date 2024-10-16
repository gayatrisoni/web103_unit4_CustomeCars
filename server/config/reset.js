import pool from "./database.js"
import dotenv from  "./dotenv.js"
import carsData from "../data/cars.js"
import interiorsData from "../data/interiors.js"
import exteriorsData from "../data/exteriors.js"
import wheelsData from "../data/wheels.js"
import roofsData from "../data/roofs.js"

const createTables = async () => {
    const createTableQueries = `
        DROP TABLE IF EXISTS cars;
        DROP TABLE IF EXISTS exteriors;
        DROP TABLE IF EXISTS interiors;
        DROP TABLE IF EXISTS wheels;
        DROP TABLE IF EXISTS roofs;
    

        CREATE TABLE IF NOT EXISTES cars (
            id SERIEAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            isconvertible BOOLEAN NOT NULL,
            exterior VARCHAR(255) NOT NULL,
            roof VARCHAR(255) NOT NULL,
            wheels VARCHAR(255) NOT NULL,
            interior VARCHAR(255) NOT NULL,
            price VARCHAR(10) NOT NULL,
        )

        CREATE TABLE IF NOT EXISTES exteriors  (
            id SERIEAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            price VARCHAR(10) NOT NULL,
        )

        CREATE TABLE IF NOT EXISTES interiors  (
            id SERIEAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            price VARCHAR(10) NOT NULL,
            iscombo BOOLEAN  NOT NULL
        )

        CREATE TABLE IF NOT EXISTES wheels  (
            id SERIEAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            price VARCHAR(10) NOT NULL,
        )

        CREATE TABLE IF NOT EXISTES roofs  (
            id SERIEAL PRIMARY KEY,
            color VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL
            price VARCHAR(10) NOT NULL,
            isconvertible BOOLEAN  NOT NULL
        )
    `

    try {
        await pool.query(createTableQueries);
        console.log('🎉 All tables created successfully');
    } catch (err) {
        console.error('⚠️ error creating tables', err);
    }
};

const seedCarsTable = async () => {
    

    const insertQuery = `
        INSERT INTO cars (name, isconvertible, exterior, roof, wheels, interior, price)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;

    for (const car of carsData) {
        const values = [
            car.name,
            car.isconvertible,
            car.exterior,
            car.roof,
            car.wheels,
            car.interior,
            car.price,
        ];
    
        try {
            await pool.query(insertQuery, values);
            console.log(`✅ ${car.name} added to cars table successfully`);
        } catch (err) {
            console.error('⚠️ error inserting car', err);
        }
    }
};

const seedExteriorsTable = async () => {
    const insertQuery = `
        INSERT INTO exteriors (color, image, price)
        VALUES ($1, $2, $3)
    `;

    for (const exterior of exteriorsData) {
        const values = [
            exterior.color,
            exterior.image,
            exterior.price,
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ Exterior color ${exterior.color} added to exteriors table successfully`);
        } catch (err) {
            console.error('⚠️ error inserting exterior', err);
        }
    }
};

const seedInteriorsTable = async () => {
    const insertQuery = `
        INSERT INTO interiors (color, image, price, iscombo)
        VALUES ($1, $2, $3, $4)
    `;

    for (const interior of interiorsData) {
        const values = [
            interior.color,
            interior.image,
            interior.price,
            interior.iscombo,
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ Interior color ${interior.color} added to interiors table successfully`);
        } catch (err) {
            console.error('⚠️ error inserting interior', err);
        }
    }
};

const seedWheelsTable = async () => {
    const insertQuery = `
        INSERT INTO wheels (color, image, price)
        VALUES ($1, $2, $3)
    `;

    for (const wheel of wheelsData) {
        const values = [
            wheel.color,
            wheel.image,
            wheel.price,
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ Wheel color ${wheel.color} added to wheels table successfully`);
        } catch (err) {
            console.error('⚠️ error inserting wheel', err);
        }
    }
};

const seedRoofsTable = async () => {
    const insertQuery = `
        INSERT INTO roofs (color, image, price, isconvertible)
        VALUES ($1, $2, $3, $4)
    `;

    for (const roof of roofsData) {
        const values = [
            roof.color,
            roof.image,
            roof.price,
            roof.isconvertible,
        ];

        try {
            await pool.query(insertQuery, values);
            console.log(`✅ Roof color ${roof.color} added to roofs table successfully`);
        } catch (err) {
            console.error('⚠️ error inserting roof', err);
        }
    }
};

const seedDatabase = async () => {
    await createTables();
    await seedCarsTable();
    await seedExteriorsTable();
    await seedInteriorsTable();
    await seedWheelsTable();
    await seedRoofsTable();
    console.log('🎉 Database seeded successfully');
};

// Call the seedDatabase function to seed the database
seedDatabase();

