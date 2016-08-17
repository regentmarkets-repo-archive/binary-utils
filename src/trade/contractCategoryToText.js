export default (category: string): string => ({
    callput: 'Up/Down',
    risefall: 'Rise/Fall',
    higherlower: 'Higher/Lower',
    asian: 'Asians',
    digits: 'Digits',
    endsinout: 'Ends In/Out',
    staysinout: 'Stays In/Out',
    touchnotouch: 'Touch/No Touch',
    spreads: 'Spreads',
})[category];
