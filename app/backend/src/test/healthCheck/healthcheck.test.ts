import { expect } from 'chai';
import express = require('express');
import di from '../../di';

describe('Health check', function () {
    it('Should say hi!', async () => {
        const response = await di.axios.get('http://localhost:8081/health_check');
        console.log(response);
        expect(response).equal('Not Logged!');
    });
});
