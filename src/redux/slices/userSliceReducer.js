export const handleRegisterUser = (state, action) => {
  state.user = action.payload.user;
  // state.isLoggedIn = true;
};

export const handleAuthUser = (state, action) => {
  state.user = action.payload;
  // state.token = action.payload.token;
  state.isLoggedIn = true;
};

export const handleLogOutUser = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const hadleRefreshUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const anyrefreshUserPending = state => {
  state.isRefreshing = true;
};
export const anyrefreshUserRejected = state => {
  state.isRefreshing = false;
};

export const handleVerifyEmail = state => {
  console.log(state.user);
};

export const handleSendTempPassword = (state, action) => {
  state.temporaryPassword = action.payload;
};
