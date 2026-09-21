const baseUrl = 'https://wqbswfpqjgpicubvimbh.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_aO_n-_rJOWzVwaQsy-qPgw_i3fSlh_m';

export async function fetchUsers() {
    const response = await fetch(baseUrl, {
        headers: {
            'apikey': apiKey,
        }
    });

    const data = await response.json();

    return data;
}
