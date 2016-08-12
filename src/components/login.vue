<!-- component -->
<template>
    <div class="ui main grid container center">
        <div class="column" style="margin-left: auto;margin-right: auto;width: 450px;">
            <h2 class="ui teal image header">
                <img src="../../logo.png" class="image">
                <div class="content">
                    Log-in to your account
                </div>
            </h2>
            <form class="ui large form">
                <div class="ui stacked segment">
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="user icon"></i>
                            <input type="text" name="email" placeholder="E-mail address">
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui left icon input">
                            <i class="lock icon"></i>
                            <input type="password" name="password" placeholder="Password">
                        </div>
                    </div>
                    <div class="ui fluid large teal submit button">Login</div>
                </div>

                <div class="ui error message"></div>

            </form>

            <div class="ui message">
                New to us? <a v-link="{path: '/register'}">Sign Up</a>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="../js/login.js"></script>

