import React from 'react';
import FieldLabel from '../../components/Label/index';

import Head from '../../components/header/index';

import CustomTextInput from '../../components/FormComponents/TextInput';

import { config } from '../../utils/config';


function Signin() {
  return (
    <div>

      <Head />

      <div class="cotainer">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header">SIGNIN</div>
              <div class="card-body">
                <form action="/home" method="post">



                  {/* rendering the email field */}
                  <div class="form-group row">
                    <FieldLabel
                      classStyle="col-md-4 col-form-label text-md-right"
                      textLabel={'E-Mail Address'}
                    />
                    <div class="col-md-6">
                      <CustomTextInput
                        type="email"
                        name="email-address"
                      />
                    </div>
                  </div>

                  {/* rendering the email field */}
                  <div class="form-group row">
                    <FieldLabel
                      classStyle="col-md-4 col-form-label text-md-right"
                      textLabel={'Password'}
                    />
                    <div class="col-md-6">
                      <CustomTextInput
                        type="password"
                        name="password"
                      />
                    </div>
                  </div>

                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">
                      Signin
                                </button>
                    <a href={`${config.root}/resetpassword`} class="btn btn-link">
                      Forgot Your Password?
                                </a>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
