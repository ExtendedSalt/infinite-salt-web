import create from 'zustand'

const store = (set: any) => ({
    navOpen_speed: false,
    setNavOpen_speed: (v) => set((state: any) => ({ navOpen_speed: v })),
    navOpen_Mobile: false,
    setNavOpen_Mobile: (v) => set((state: any) => ({ navOpen_Mobile: v })),
})

const Store = create(store)

export default Store