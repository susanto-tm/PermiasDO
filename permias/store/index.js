export const state = () => ({
    navigation: 'secondary',
    officerSlide: 0,
});

export const mutations = {
    updateOfficerSlide(state, idx) {
        state.officerSlide = idx;
    },
    updateNavigation(state, type) {
        state.navigation = type;
    }
}