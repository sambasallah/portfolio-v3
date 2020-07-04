# Testing Vue Router Replace

## Testing `$router.replace` with an Object

Sometimes when redirecting, it is important to pass additional information along to either maintain that information, prefill inputs, etc. You do that by passing query params in the `$router.replace` method, but it can make testing just a little more convoluted. Thankfully with Jest, there is a way to make sure that the router is indeed replacing and redirecting to the correct location.

```js
invitationInformation() {
    ...

    // This particular code makes an API call with the email address from the query param to return AccountExists
    if (!res.AccountExists)
        return this.$router.replace({ path: 'signup', query: { email: this.email } });

    ...
}
```
Using [Vue test utils](https://vue-test-utils.vuejs.org/) and [Jest](https://jestjs.io/docs/en/getting-started.html), we can [mock](https://jestjs.io/docs/en/mock-functions "Jest mock functions") the Vue router:

```js
describe('Signup', () => {

    it('If invited email does not have an account, redirect to signup page.', async () => {
        const wrapper = mount(Login, {
                mocks: {
                    $router: {
                        replace: jest.fn() // Mock the router replace method
                    }
                }
            });
        };

        // The assertion: expect the router link path to equal signup
        expect(wrapper.vm.$router.replace.mock.calls[0][0].path).toBe('signup');
	});
});

```

`.mock` is a property in Jest that stores data about the function and what the function returned. It allows the ability to mock how functions are called, in this case, how `$router.replace` is called and what is returned from that call.

Each call to `$router.replace` is stored in an array of items, which looks like ` [ {"path": "signup", "query": {"email": "existing@user.com"}} ]`.

In the case of this test, we are checking to make sure that `path = signup`. By calling `[0]` on `calls[0]`, it allows us to access the value of `path`.

When the assertion is tested, it will check to make sure that when the condition is met from the method in the mounted component, `wrapper.vm.$router.replace.mock.calls[0][0].path` will be equal to `signup`.