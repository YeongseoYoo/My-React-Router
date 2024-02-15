import instance from './base';

// 회원가입
export const signUp = async (email, password, nickname) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await instance.post('/signup', { email, password, nickname });
        return response;
    } catch (error) {
        throw error;
    }
};

// 로그인
export const login = async (email, password) => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await instance.post('/users/login', { email, password });
        return response;
    } catch (error) {
        throw error;
    }
};


// 로그아웃
export const logout = async () => {
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await instance.all('/logout');
        return response;
    } catch (error) {
        throw error;
    }
};
