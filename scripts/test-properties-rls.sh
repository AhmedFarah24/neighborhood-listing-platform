#!/usr/bin/env bash
# Run against a DEVELOPMENT Supabase project only.
# Required: SUPABASE_URL, SUPABASE_ANON_KEY, OTHER_USER_ACCESS_TOKEN, PRIVATE_PROPERTY_ID, OTHER_OWNED_PROPERTY_ID
set -euo pipefail
: "${SUPABASE_URL:?Set SUPABASE_URL}"
: "${SUPABASE_ANON_KEY:?Set SUPABASE_ANON_KEY}"
: "${OTHER_USER_ACCESS_TOKEN:?Set OTHER_USER_ACCESS_TOKEN}"
: "${PRIVATE_PROPERTY_ID:?Set PRIVATE_PROPERTY_ID}"
: "${OTHER_OWNED_PROPERTY_ID:?Set OTHER_OWNED_PROPERTY_ID}"
mkdir -p evidence/rls-results
printf 'Anonymous SELECT private record (not an authenticated session):\n' > evidence/rls-results/anonymous.txt
curl -isS --get "${SUPABASE_URL}/rest/v1/properties" \
  --data-urlencode "id=eq.${PRIVATE_PROPERTY_ID}" \
  --data-urlencode "select=id,title,status" \
  -H "apikey: ${SUPABASE_ANON_KEY}" >> evidence/rls-results/anonymous.txt
printf 'Other authenticated user PATCH someone else owned record:\n' > evidence/rls-results/other-user.txt
curl -isS -X PATCH "${SUPABASE_URL}/rest/v1/properties?id=eq.${OTHER_OWNED_PROPERTY_ID}&select=id,title" \
  -H "apikey: ${SUPABASE_ANON_KEY}" \
  -H "Authorization: Bearer ${OTHER_USER_ACCESS_TOKEN}" \
  -H "Content-Type: application/json" \
  -H "Prefer: return=representation" \
  -d '{"title":"RLS test - should not change"}' >> evidence/rls-results/other-user.txt
printf '\nSaved HTTP evidence to evidence/rls-results/*.txt. Inspect responses and verify rows were not changed.\n'
