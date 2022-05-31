import { config } from 'dotenv';
import di from '../di';

config();

before((done) => {
    di.app.listen(di.env.SERVER_PORT, () => {
        console.log('oi');
        console.log(`Server is listening on port: ${di.env.SERVER_PORT}`);
    });
    done();
});

after((done) => {
    done();
});
