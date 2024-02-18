export const loadPlans = async () => {
  const apiUrl = 'https://localhost:7186/v1/plans?OrderBy=Total';
  const apiUrlLogin = 'https://localhost:7003/v1/identity/user/login';

  const requestData = {
    email: 'viana.dener@gmail.com',
    password: 'Teste@123',
  };

  const requestOptionsLogin = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  };

  try {
    // Faz a chamada para fazer o login
    const loginResponse = await fetch(apiUrlLogin, requestOptionsLogin);
    const loginJson = await loginResponse.json();

    // Verifica se o login foi bem-sucedido e obteve um AccessToken
    if (loginResponse.ok && loginJson.AccessToken) {
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + loginJson.AccessToken,
          'Content-Type': 'application/json',
        },
      };

      // Faz a chamada para carregar os planos usando o AccessToken obtido
      const plansResponse = await fetch(apiUrl, requestOptions);
      const plansJson = await plansResponse.json();

      return plansJson;
    } else {
      throw new Error('Falha no login');
    }
  } catch (error) {
    console.error('Erro ao carregar os planos:', error);
    throw error;
  }
};
