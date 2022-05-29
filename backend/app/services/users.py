import requests

from fastapi import HTTPException

class UserService():
    """
    A service to get user data from reqres.io
    """
    base_url = 'https://reqres.in/api/users'

    @classmethod
    def get_user(cls, user_id):
        """
        get_user gets user data form the reqres.io

        :param int user_id: id of a user 
        :return: user in json format
        """ 
        response = requests.get(f'{cls.base_url}/{user_id}')
        if response.status_code == 200:
            return response.json()['data']
        elif response.status_code == 404:
            raise HTTPException(status_code=404, detail="User not found")
        else:
            raise HTTPException(status_code=response.status_code, detail=response.json())