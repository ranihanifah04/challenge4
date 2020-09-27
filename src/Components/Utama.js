import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from '../Beranda';
import daftar from '../daftar';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/daftar" component={daftar} />
    </Switch>
)

export default Utama;