export const state = () => ({
    navigation: 'secondary',
    officerSlide: 0,
    maxOfficers: 7,
    updatingOfficer: false
});

export const mutations = {
    incrementSlide(state) {
        state.officerSlide = (state.officerSlide + 1) % state.maxOfficers;
    },
    decrementSlide(state) {
        state.officerSlide = (((state.officerSlide - 1) % state.maxOfficers) + state.maxOfficers) % state.maxOfficers;
    },
    setOfficerSlide(state, idx) {
        state.officerSlide = idx % state.maxOfficers;
    },
    setNavigation(state, type) {
        state.navigation = type;
    },
    setUpdatingOfficer(state, bool) {
        state.updatingOfficer = bool;
    }
}

export const getters = {
    getOfficerSlide: state => {
        return state.officerSlide;
    },
    getNavigationMode: state => {
        return state.navigation;
    },
    getMaxOfficers: state => {
        return state.maxOfficers;
    },
    getUpdatingOfficer: state => {
        return state.updatingOfficer;
    }
}
