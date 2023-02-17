export const useAuth = defineStore("auth", {
  state: () => ({
    user: {
      username: null,
      email: null,
    },
    token: null,
  }),
  getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
  },

  actions: {
    async login(username, password) {
      if (username === "admin" && password === "admin") {
        this.user.username = username;
        this.user.email = "admi@gmail.com";
        this.token = "12345";
        const token = useCookie("token", this.token);
        token.value = this.token;
        const user = useCookie("user", this.user);
        user.value = this.user;
        const router = useRouter();
        router.push("/").then(() => {
          window.location.reload();
        });
      } else {
        alert("Bad information");
      }
    },
    async logout() {
      this.user.username = null;
      this.user.email = null;
      this.token = null;
      const token = useCookie('token',this.token);
      token.value = this.token;
      const user = useCookie('user',this.user)
      user.value = this.user
    },
  },
});
