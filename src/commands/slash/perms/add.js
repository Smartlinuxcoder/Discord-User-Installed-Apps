const fs = require("node:fs");

module.exports = async (client, int) => {
	const commandPermissions = fs.readFileSync(
		`${__dirname}/../../../data/permissions/commandPermissions.json`,
	);
	const commandPermissionsJSON = JSON.parse(commandPermissions);

	const commandName = int.options.getString("command");
	const user = int.options.getString("user");

	if (!commandPermissionsJSON[commandName])
		commandPermissionsJSON[commandName] = [];

	if (!user)
		return await int.reply({
			content: "I couldn't find this user",
			ephemeral: true,
		});

	if (commandPermissionsJSON[commandName].includes(user))
		return await int.reply({
			content: `\`${user}\` is already allowed to use this command`,
			ephemeral: true,
		});

	commandPermissionsJSON[commandName] = Array.from(
		new Set([
			user,
			...client.config.owners,
			...commandPermissionsJSON[commandName],
		]),
	);

	fs.writeFileSync(
		`${__dirname}/../../../data/permissions/commandPermissions.json`,
		JSON.stringify(commandPermissionsJSON, null, 2),
	);

	await int.reply({
		content: `Successfully added \`${user}\` in the users who can run the command \`${commandName}\``,
		ephemeral: true,
	});
};
