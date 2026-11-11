const wholeEuros = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const euros = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

/** € 25 voor hele bedragen, € 7,50 als er centen zijn. Met een harde spatie na het euroteken. */
export function formatPrice(amount: number): string {
    return Number.isInteger(amount) ? wholeEuros.format(amount) : euros.format(amount);
}
