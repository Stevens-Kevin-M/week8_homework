import React from 'react';

let token = 'a01983302b4b19e1a6a5f0596057666f63f8cb3d798103ee';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://dashboard.heroku.com/api/ships`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async(data:any = {}) => {
        const response = await fetch('https://dashboard.heroku.com/api/ships', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }

        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://dashboard.heroku.com/api/ships${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to post new data to the server')
        }
    },

    delete: async (id: string) => {
        const response = await fetch(`https://dashboard.heroku.com//api/ships${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}