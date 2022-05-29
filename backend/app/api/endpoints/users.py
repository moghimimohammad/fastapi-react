import requests

from fastapi import APIRouter, HTTPException

from app.services.users import UserService

router = APIRouter()

@router.get("/{user_id}")
def read_user_by_id(
    user_id: int,
):
    """
    Get a specific user by id.

    :param int user_id: id of a user 
    :return: response with user data in json format
    """
    try:
        return UserService.get_user(user_id=user_id)
    except HTTPException as e:
        raise e
