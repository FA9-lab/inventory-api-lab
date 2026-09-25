function greeting() {
  return 'Hello from broken inventory-api-lab';
}

if (require.main === module) {
  console.log(greeting());
}

module.exports = { greeting };
